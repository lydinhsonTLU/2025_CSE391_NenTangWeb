const Card = () => {
    return (
        <>
            <div className="con" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
                <div className="card">
                <div className="card-header">
                    <h2>Employee Card</h2>
                </div>
                <div className="card-body">
                    <p>This is a card component for displaying employee information.</p>
                </div>
                </div>

                <div className="card">
                <div className="card-header">
                    <h2>Employee Card</h2>
                </div>
                <div className="card-body">
                    <p>This is a card component for displaying employee information.</p>
                </div>
                </div>

                <div className="card">
                <div className="card-header">
                    <h2>Employee Card</h2>
                </div>
                <div className="card-body">
                    <p>This is a card component for displaying employee information.</p>
                </div>
                </div>
            </div>
        
        </>
    );
}

export default Card;