export default function MealDetailPage({ params }) {
    const { slug } = params;

    return (
        <main>
            <h1>{slug}</h1>
        </main>
    )
}