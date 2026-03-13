import { BadgeCheck, Calendar, ChartSpline, Heart, Image, ImagePlay, Laugh, MessageCircle, Repeat2, WandSparkles } from "lucide-react"

const FeedItem = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="flex gap-5 px-6 py-4">
            <img src="https://www.pinterest.com/pin/710935491163017506/" className="size-11 rounded-full" alt="Nome do Usuario" />

            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="text-text text-[15px] font-semibold">{title}</div>
                    <BadgeCheck className="text-yellow -ml-1 size-4" fill="#1c8fdb53"></BadgeCheck>
                    <div className="text-gray text-sm lowercase">@{title}</div>
                    <div className="text-gray text-sm lowercase">• 7m</div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}