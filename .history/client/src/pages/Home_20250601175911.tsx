import './Allpages.css';

const sports = [
    {
        title: 'Bodybuilding',
        description: 'Strength and muscle training.',
        image: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg',
    },
    {
        title: 'Cardio',
        description: 'Improve endurance and heart health.',
        image: 'https://images.pexels.com/photos/4944970/pexels-photo-4944970.jpeg',
    },
    {
        title: 'Yoga',
        description: 'Balance, flexibility, and mindfulness.',
        image: 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg',
    },
    {
        title: 'Boxing',
        description: 'Power and agility training.',
        image: 'https://images.pexels.com/photos/3586873/pexels-photo-3586873.jpeg',
    },
    {
        title: 'Dance & Gymnastics',
        description: 'Express yourself through movement.',
        image: 'https://images.pexels.com/photos/4324052/pexels-photo-4324052.jpeg',
    },
    {
        title: 'Kids',
        description: 'Fun and fitness for children.',
        image: 'https://images.pexels.com/photos/3992594/pexels-photo-3992594.jpeg',
    },
];

function Home() {
    return (
        <section id="sports-grid">
            {sports.map((sport) => (
                <div
                    key={sport.title}
                    className="sport"
                    style={{ backgroundImage: `url('${sport.image}')` }}
                >
                    <h2>{sport.title}</h2>
                    <p>{sport.description}</p>
                    <a href="#">Explore More</a>
                </div>
            ))}
        </section>
    );
}

export default Home;
