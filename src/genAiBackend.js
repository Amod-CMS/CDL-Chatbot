import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

function AiBackendCall({ steps, triggerNextStep }) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState('');
    const [interactionId, setInteractionId] = useState(null);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const fetchData = useCallback(async () => {
        const prompt = steps.enterQuestion.value;
        console.log("Fetching data for prompt:", prompt);
        // const queryUrl = `http://localhost:5000/invoke_agent`;
        const queryUrl = `http://13.202.32.27:1907/invoke_agent`;
        // const queryUrl = `http://35.154.163.181:1907/invoke_agent`;

        try {
            const response = await axios.post(queryUrl, { prompt });
            console.log("Received data:", response.data);

            if (response.data.response) {
                setResult(response.data.response);

                // Store interaction data in PostgreSQL
                const id = await storeInteraction(steps.nameEntry.value, steps.enterQuestion.value, response.data.response);
                setInteractionId(id);
            } else {
                setResult('Error fetching response');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setResult('Error fetching data');
        } finally {
            setLoading(false);
        }
    }, [steps.enterQuestion.value]);

    const storeInteraction = async (userName, prompt, response) => {
        // const storeUrl = 'http://localhost:5000/store_interaction';
        const storeUrl = 'http://35.154.163.181:1906/store_interaction';
        const userData = {
            userName: userName,
            prompt: prompt,
            response: response,
        };

        try {
            const response = await axios.post(storeUrl, userData);
            console.log('Interaction stored in PostgreSQL');
            return response.data.interaction_id; // Return interaction_id for feedback submission
        } catch (error) {
            console.error('Error storing interaction in PostgreSQL:', error);
            return null;
        }
    };

    const storeFeedback = async (feedbackType) => {
        // const storeUrl = 'http://localhost:5000/store_feedback';
        const storeUrl = 'http://35.154.163.181:1906/store_feedback';
        const feedbackData = {
            interactionId: interactionId,
            feedback: feedbackType,
        };

        try {
            await axios.post(storeUrl, feedbackData);
            setFeedbackSubmitted(true); // Update state when feedback is successfully stored
        } catch (error) {
            console.error('Error storing feedback in PostgreSQL:', error);
        }
    };

    useEffect(() => {
        if (loading && steps.enterQuestion.value) {
            fetchData();
        }
    }, [fetchData, loading, steps.enterQuestion.value]);

    useEffect(() => {
        if (!loading && result) {
            triggerNextStep({ value: result, trigger: "enterQuestion" });
        }
    }, [loading, result, triggerNextStep]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <p>{result}</p>
                    {!feedbackSubmitted ? (
                        <>
                            <button onClick={() => storeFeedback('positive')}>👍</button>
                            <button onClick={() => storeFeedback('negative')}>👎</button>
                        </>
                    ) : (
                        <p>Thanks for your valuable feedback!</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default AiBackendCall;