"use client";

export default function Error({ error }) {
    return (
        <div className="error">
            <h1>An Error Occurred</h1>
            <p>Failed to fetch data, please try again later.</p>
        </div>
    )
}