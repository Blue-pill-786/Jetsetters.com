import React from 'react'
import Title from '../shared/Title'
import Footer from '../Footer'
import HeaderBanner from '../shared/HeaderBanner'
import HomePhoneIcon from '../shared/HomePhoneIcon'

const WrapperLayout = (title, description) => (WrapperComponent) => {
    // console.log(title)
    return (props) => {
        return (
            <>
                <Title title={title} description={description} />
                <HeaderBanner />
                <div className='mt-[48px]'>
                    <HomePhoneIcon />
                    <WrapperComponent {...props} />
                    <Footer />
                </div>
            </>
        )
    }
}

export default WrapperLayout