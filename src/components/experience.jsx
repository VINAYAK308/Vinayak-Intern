import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm textneu400">{experience.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
