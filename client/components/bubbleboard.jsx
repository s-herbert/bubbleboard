import React, { Component } from 'react';
import masterBubble from './masterBubble.jsx';

export const BubbleOb = (parent, offsetX, offsetY, style, data, ID, children) => {
    this.parent = parent;
    this.offsets = {x: offsetX, y: offsetY},
    this.pos = {x: this.parent.pos.x + this.offsets.x,
                y: this.parent.pos.y + this.offsets.y};
    this.style = style;
    this.data = data;
    this.ID = this.parent.ID + ID;
    this.children = children;

    return this;
}

const BubbleBoard = (props) => {
    let bbStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: '#c1fbff',
    }

    //Master bubble takes a "Master Bubble Object"
    //Its the same as a regular bubble object, but it's various properties
    //override the defaults, which normally inherit from the parent. lets say
    //the bubble object looks like this:
    /*

    Bubble {
        parent: {Bubble},
        offsets: {x: xOffset, y: yOffset}, //generate angle data based on this
        position: {x: parentposx + offsetx, y: parentposy + offsety}, 
                     //parents grab this data from children to render them
        ID: //The first part of an ID is the concatenation of all the parent ID's, then an ID that is just generated to be unique
            //from its siblings.
        style: {various CSS styling},
        data: String,
                     //key-value pairs whose values are objects/arrays just display the key, and then those things
                     //are in children bubbles. key-value pairs with primitive values display that value and their keys;

        children: [Bubbles] 
                     //regular bubble objects
    }

    the bubble COMPONENTS take bubble OBJECTS as props, then render their children, passing them each their bubble object
    the bubble components have a function that takes the data, style, and position out of the child objects and renders them as JSX elements.
    these generated children elements positions are locked to d3 nodes, whose default positions are the bubble object positions.
    Haven't quite gotten to that yet, but I will. Next on to make bubbleify.

    */


    
    let el = 
    <canvas style = {bbStyle}>
        <masterBubble bubbles = {props.masterBubble}></masterBubble>
    </canvas>

    return el;
}

export default BubbleBoard;