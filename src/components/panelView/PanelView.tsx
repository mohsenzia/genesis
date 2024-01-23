import React from 'react';

interface Props {
    bgLevel: "level1" | "level2",
    children: any;
}

const defaultStyle = {
    padding: 15,
    borderRadius: 15, 
    borderWidth:1,
     borderColor:'gray'
}

const PanelView = (props: Props) => {
    const {bgLevel, children} = props;
    const bgColor = bgLevel === 'level1' ? '#dddddd' : '#aaaaaa'

    return (
        <div style={{...defaultStyle, ...{backgroundColor:bgColor}}}>
            {children}
        </div>
    )
}

export default PanelView;