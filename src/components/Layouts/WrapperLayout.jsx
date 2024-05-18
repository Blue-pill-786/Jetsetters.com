import React from 'react'
import Title from '../shared/Title'
import Footer from '../Footer'
import HeaderBanner from '../shared/HeaderBanner'
import HomePhoneIcon from '../shared/HomePhoneIcon'
import Header2_0 from '../Header2_0'

const WrapperLayout = (title, description) => (WrapperComponent) => {
    // console.log(title)
    return (props) => {
        return (
            <>
                <Title title={title} description={description} />
                <HeaderBanner />
                {/* <Header2_0 /> */}
                <div className='mt-[60px]'>
                    <HomePhoneIcon />
                    <WrapperComponent {...props} />
                    <Footer />
                </div>
            </>
        )
    }
}

export default WrapperLayout