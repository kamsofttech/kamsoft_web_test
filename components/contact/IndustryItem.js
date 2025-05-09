import React from 'react'
import styles from './industryItem.module.css'
import GridItem from './GridItem'
const IndustryItem = () => {
    return (
        <div className={styles.indItemGrid}>
            <GridItem title={'Automotive'} icon={'flaticon-car'}/>
            <GridItem title={'Retail'} icon={'flaticon-icon-626443'}/>
            <GridItem title={'Travel'} icon={'flaticon-icon-1243560'}/>
            <GridItem title={'Healthcare'} icon={'flaticon-heart'}/>
            <GridItem title={'Education'} icon={'flaticon-author'}/>
            <GridItem title={'Finance'} icon={'flaticon-piggy-bank'}/>
            <GridItem title={'Logistics'} icon={'flaticon-trolley'}/>
            <GridItem title={'Utilities'} icon={'flaticon-thunder'}/>
        </div>
    )
}

export default IndustryItem