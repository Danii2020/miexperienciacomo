import { Favorite } from "@mui/icons-material"

type Props = {
    footerType: "card" | "postBody"
    professional_role: string
    experience_time: string
}

const FooterInfo = ({footerType, professional_role, experience_time}:Props) => {
    const isCard = footerType === "card"
    return (
        <div className="mt-6 flex items-center justify-between">
            <div>
                <p className="text-md font-medium">{professional_role}</p>
                <p className={`text-sm text-gray-${isCard ? '200' : '800'}`}>{experience_time} de experiencia</p>
            </div>
            <div className="flex items-center gap-1">
                <button>
                    <Favorite fontSize="medium"/>
                </button>
                <span className={`text-md text-gray-${isCard ? '100' : '800'}`}>10</span>
            </div>
        </div>
    )
}

export default FooterInfo
