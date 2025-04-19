import React from 'react';

const ProjectHeader = ({ title, subtitle }) => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderBottom: '2px solid #ddd',
    },
    title: {
        margin: '0',
        fontSize: '2.5rem',
        color: '#333',
    },
    subtitle: {
        margin: '0',
        fontSize: '1.5rem',
        color: '#666',
    },
};

export default ProjectHeader;