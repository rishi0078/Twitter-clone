import React from 'react'
import "./Widget.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widget() {
    return (
        <div className="widgets">
           <div className="widget_Input">
            <SearchIcon className="widget_searchIcon" /> 
            <input placeholder="Search Twitter" type="text" />  
           </div>
          
          <div className="widget_widgetContainer">
              <h2>What's happening</h2>

              <TwitterTweetEmbed tweetId={"1322574527855947776"} />

              <TwitterTimelineEmbed 
                  sourceType="profile"
                  screenName="reactLover"
                  options={{height:400}}

              />

              <TwitterShareButton 
              url={"https://https://www.facebook.com/rishabh.solanki.568"}
              options={{text:"#reactjs is awesome",via:"@reactLover"}}
               />
          </div>

        </div>
    )
}

export default Widget
