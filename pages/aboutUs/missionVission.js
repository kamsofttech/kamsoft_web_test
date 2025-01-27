import BgImage from '@/components/bgImage/BgImage'
import Counter from '@/components/counter/Counter'
import BreadcumbStyle2 from '@/components/elements/breadcumb/breadcumbStyle2/BreadcumbStyle2'
import CounterComponent from '@/components/elements/counters/CounterComponent'
import MissVissAboutComp from '@/components/missionVissionAbout/MissVissAboutComp'
import MVAboutbox2 from '@/components/mvAboutBox2/MVAboutbox2'
import NewsComponent from '@/components/newsBoxComponent/NewsComponent'
import React from 'react'

const missionVission = () => {
  return (
    <div>
        <BreadcumbStyle2 main_title={"Our Mission & Vision"} sub_title={"Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success"} background={"url('/images/header-inner/14.jpg') no-repeat center center/cover"}/>
        <MissVissAboutComp/>
        <BgImage/>
        <MVAboutbox2/>
        <Counter/>
        <NewsComponent/>
    </div>
  )
}

export default missionVission