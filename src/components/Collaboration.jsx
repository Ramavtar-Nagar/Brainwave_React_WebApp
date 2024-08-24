import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabText, collabContent } from "../constants"
import Button from "./Button"
import Section from "./Section"
import { LeftCurve, RightCurve } from "./design/Collaboration"

const Collaboration = () => {
  return (
    <Section crosses>
        <div className="lg:flex container">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">
                    AI Chat App for seamless collaboration
                </h2>

                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.map((item) => (
                        <li className="mb-3 py-" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} height={24} width={24} alt="check" />
                                <h6 className="body-2 ml-5">
                                    {item.title}
                                </h6>
                            </div>
                            {item.text && (
                                <p className="body-2 mt-3 text-n-4">
                                    {item.text}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
                <Button>
                    Try it now
                </Button>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-4">
                <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                    {collabText}
                </p>

                

            </div>
        </div>
    </Section>
  )
}

export default Collaboration;