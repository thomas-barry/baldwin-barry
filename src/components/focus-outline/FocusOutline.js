import React from 'react'

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const StyledFocusable = styled.div`
//   font-size: 24px;
//   outline: none;
// `

// const StyledLink = styled.a`
//   font-size: 24px;
//   outline: none;
// `

// const StyledHeader = styled.h1`
//   color: black;
//   outline: none;
// `

const FocusOutline = () =>
    (<div>
        <h1 tabIndex="0">This is a header</h1>
        <div tabIndex="0">Accepts Focus</div>
        <a href="http://192.168.2.23:8000/blog/20190723-ios-outline/">NYTimes</a>
        <div>
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
            <label htmlFor="subscribeNews">Subscribe to newsletter?</label>
        </div>
    </div>)

export default FocusOutline
