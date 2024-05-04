import React from 'react'
import Footer from '../Footer'

const WrapperLayout = () => (WrapperComponent) => {
    return (props) => {
        return (
            <>
                <WrapperComponent {...props} />
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default WrapperLayout