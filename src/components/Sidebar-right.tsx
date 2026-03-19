import { BadgeCheck, MoreHorizontal, Search, Settings } from "lucide-react"
import { Button } from "./Button"

export const SidebarRight = () => {
    return (
        <div className="space-y-4">
            <div className="bg-trends flex items-center rounded-[42px] px-2 py-2">
                <Search className="text-gray"></Search>
                <input placeholder="Search" className="text-gray bg-transparent px-2 py-0.5 text-sm outline-none" />
            </div>

            <div className="bg-trends space-y-4 rounded-[15px] p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-text text-sm font-semibold">Trends for you</h2>
                    <Settings className="text-text size-4"></Settings>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between">
                    <div className="space-y-1">
                        <div className="text-gray text-xs">Trending in Inaba</div>
                        <h3 className="text-text text-sm font-semibold">#InvestigationTeam</h3>
                        <div className="text-gray text-xs">1.5M Tweets</div>
                    </div>
                    <MoreHorizontal className="text-text size-4"></MoreHorizontal>
                </div>

                <div className="flex justify-between">
                    <div className="space-y-1">
                        <div className="text-gray text-xs">Trending in Inaba</div>
                        <h3 className="text-text text-sm font-semibold">#InvestigationTeam</h3>
                        <div className="text-gray text-xs">1.5M Tweets</div>
                    </div>
                    <MoreHorizontal className="text-text size-4"></MoreHorizontal>
                </div>

                <div className="flex justify-between">
                    <div className="space-y-1">
                        <div className="text-gray text-xs">Trending in Inaba</div>
                        <h3 className="text-text text-sm font-semibold">#InvestigationTeam</h3>
                        <div className="text-gray text-xs">1.5M Tweets</div>
                    </div>
                    <MoreHorizontal className="text-text size-4"></MoreHorizontal>
                </div>

                <div className="flex justify-between">
                    <div className="space-y-1">
                        <div className="text-gray text-xs">Trending in Inaba</div>
                        <h3 className="text-text text-sm font-semibold">#InvestigationTeam</h3>
                        <div className="text-gray text-xs">1.5M Tweets</div>
                    </div>
                    <MoreHorizontal className="text-text size-4"></MoreHorizontal>
                </div>

                <div className="text-yellow-300 w-fit cursor-pointer text-xs font-medium hover:underline">
                    Show More
                </div>
            </div>

            <div className="bg-trends space-y-4 rounded-[15px] p-4">
                <h2 className="text-text text-sm font-semibold">Who to follow</h2>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <img src="https://www.reddit.com/r/PERSoNA/comments/fh91z0/daily_character_discussion_day_100_yu_narukami/?tl=pt-br" 
                        className="size-8 rounded-full"
                        alt="Nome do Usuário" />

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="text-text text-[15px] font-semibold">Yu Narukami</span>
                                <BadgeCheck className="text-gray text-xs">@yu</BadgeCheck>
                            </div>
                            <Button variant="small">
                                Follow
                            </Button>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="text-text text-[15px] font-semibold">Yu Narukami</span>
                                <BadgeCheck className="text-gray text-xs">@yu</BadgeCheck>
                            </div>
                            <Button variant="small">
                                Follow
                            </Button>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="text-text text-[15px] font-semibold">Yu Narukami</span>
                                <BadgeCheck className="text-gray text-xs">@yu</BadgeCheck>
                            </div>
                            <Button variant="small">
                                Follow
                            </Button>
                        </div>

                        <div className="text-yellow-300 w-fit cursor-pointer text-xs font-medium hover:underline">
                            Show More
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="text-gray text-center text-xs">
                All rights reserved. © 2025 Atlus.
            </div>
        </div>
    )
}