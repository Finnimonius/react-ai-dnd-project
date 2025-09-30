import './GameMain.css'

export default function GameMain({ onStartCreation }) {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <button className='hero-btn' onClick={onStartCreation}>Начать путешествие</button>
            </div>
        </section>
    )
}