import React from 'react';
import { CardBody } from "@nextui-org/react";

export default function RecipeInstructions({ instructions, cookingTime }) {
    return (
        <CardBody style={styles.cardBody}>
            <div style={styles.header}>
                <h3 style={styles.instructionsTitle}>Recipe Instructions</h3>
                {cookingTime && <span style={styles.cookingTime}>({cookingTime})</span>}
            </div>
            <div style={styles.instructionsContent}>
                <ol style={styles.instructionsList}>
                    {instructions.map((instruction, index) => (
                        <li key={index} style={styles.instructionItem}>
                            <span style={styles.dash}>- </span>{instruction}
                        </li>
                    ))}
                </ol>
            </div>
        </CardBody>
    );
}

const styles = {
    cardBody: {
        padding: '0 16px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    instructionsTitle: {
        marginRight: '10px',
        marginBottom: '0',
    },
    cookingTime: {
        fontSize: '0.9em',
        color: '#888',
        marginTop: '2px'
    },
    instructionsContent: {
        overflow: 'auto',
        maxHeight: 'calc(100% - 40px)',
    },
    instructionsList: {
        paddingLeft: '10px',
    },
    instructionItem: {
        marginBottom: '2px',
    },
    dash: {
        fontWeight: 'bold',
        marginRight: '5px',
    },
};
