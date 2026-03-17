import { BadgeCheck, Calendar, ChartSpline, Heart, Image, ImagePlay, Laugh, MessageCircle, Repeat2, WandSparkles } from "lucide-react"
import { Button } from "./Button"

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
                <div className="text-text text-sm">{description}</div>
                <div className="mt-5 flex items-center gap-7">
                    <div className="flex items-center gap-1.5">
                        <MessageCircle className="text-gray size-4">
                            <span className="text-gray text-xs font-medium">103</span>
                        </MessageCircle>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Repeat2 className="text-gray size-4">
                            <span className="text-gray text-xs font-medium">79</span>
                        </Repeat2>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Heart className="text-gray size-4">
                            <span className="text-gray text-xs font-medium">1.000</span>
                        </Heart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Feed = () => {
    return (
        <div className="divide-border divide-y">
            <div className="flex h-14 items-center justify-between px-5">
                <div className="text-text text-lg font-semibold">Home</div>
                <WandSparkles className="text-text size-4"></WandSparkles>
            </div>
            <div className="flex gap-5 px-5 py-2">
                <div>
                    <img src="https://www.google.com/imgres?q=yosuke%20hanamura&imgurl=https%3A%2F%2Fcdn.polyspeak.ai%2Fspeakmaster%2Ff1606ab764b2d98d8cdc2cb1ee09597a.webp&imgrefurl=https%3A%2F%2Fwww.polybuzz.ai%2Fpt%2Fcharacter%2Fprofile%2Fp4---yosuke-hanamura-8xWFC&docid=BT7fRPDz6bnCMM&tbnid=E3FiqFcoLkgJuM&vet=12ahUKEwjw-uf3w6eTAxX5lpUCHbtrIYwQnPAOegQIIRAB..i&w=375&h=375&hcb=2&itg=1&ved=2ahUKEwjw-uf3w6eTAxX5lpUCHbtrIYwQnPAOegQIIRAB" alt="Nome do Usuario" />
                </div>
                <div className="flex-1 space-y-4 py-1">
                    <input className="text-text/70 focus:text-text placeholder:text-gray w-full border-none duration-300 outline-none"
                    placeholder="Whats happening?" />
                </div>
                <div className="flex">
                    <div className="text-yellow-300 flex flex-1 items-center gap-3">
                        <Image className="size-4.5"></Image>
                        <ImagePlay className="size-4.5"></ImagePlay>
                        <ChartSpline className="size-4.5"></ChartSpline>
                        <Laugh className="size-4.5"></Laugh>
                        <Calendar className="size-4.5"></Calendar>
                    </div>
                </div>
                <Button variant="small" disabled>
                    Tweet
                </Button>
            </div>

            <div className="divide-border divide-y">
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
                <FeedItem 
                title="Yosuke" 
                description="Eum velit voluptas ea officiis iusto est impedit magnam aut rerum enim ad voluptatum beatae est voluptatem laborum aut voluptatum aperiam. Aut tenetur quibusdam a porro optio aut deserunt rerum sit fugit natus est consectetur reprehenderit ut quos aliquam ut autem quis. Cum officia quae sit labore deleniti id delectus eius. Est nihil maxime vel assumenda voluptatibus est assumenda aliquam est corrupti quis sit laudantium assumenda qui doloremque consequuntur!">
                </FeedItem>
            </div>
        </div>
    )
}