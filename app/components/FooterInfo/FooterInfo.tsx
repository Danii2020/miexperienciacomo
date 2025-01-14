import { Favorite } from "@mui/icons-material"

type Props = {
    footerType: "card" | "postBody"
}

const FooterInfo = ({footerType}:Props) => {
    const isCard = footerType === "card"
    return (
        <div className="mt-6 flex items-center justify-between">
            <div>
                <p className="text-md font-medium">Desarrollador full stack</p>
                <p className={`text-sm text-gray-${isCard ? '200' : '800'}`}>5 años de experiencia</p>
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
