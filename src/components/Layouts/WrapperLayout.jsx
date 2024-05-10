import React from 'react'
import Title from '../shared/Title'
import Footer from '../Footer'

const WrapperLayout = (title,description) => (WrapperComponent) => {
    // console.log(title)
    return (props) => {
        return (
            <>
                <Title title={title} description={description} />
                <WrapperComponent {...props} />
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default WrapperLayout