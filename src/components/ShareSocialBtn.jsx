import {ShareSocial} from 'react-share-social'

const style = {
    root: {
        background: 'transparent',
        padding: 0,
        minWidth: 0,
        display: 'inline-flex'
    },
    copyContainer: {
        display: 'none'
    },
};

export default function ShareSocialBtn({url}) {

    return (
        <ShareSocial
            style={style}
            url={url}
            socialTypes={['facebook', 'twitter', 'reddit']}
        />
    )
}

