import BreadcumbStyle2 from '@/components/elements/breadcumb/breadcumbStyle2/BreadcumbStyle2'
import OurTeamAboutComp from '@/components/ourTeamAboutComponent/OurTeamAboutComp'
import TeamComponent from '@/components/team/TeamComponent'
import React from 'react'

const OurTeam = () => {
  return (
    <div>
        <BreadcumbStyle2 main_title={"Meet Our Team"} sub_title={"Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation."} background={"url('/images/header-inner/15.jpg') no-repeat center center/cover"}/>
        <OurTeamAboutComp/>
        <TeamComponent/>
    </div>
  )
}

export default OurTeam