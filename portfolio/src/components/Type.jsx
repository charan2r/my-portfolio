import TypeWriter from "typewriter-effect";

const Type = () => {
    return (
        <div className="TypeEffect">
            <TypeWriter
                options={{
                    strings: ['Software Developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed:20,
                  }}
            />
        </div>
    );
}

export default Type;