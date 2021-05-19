import React, {useState} from 'react'

function Article() {
    const [recentArticles , setRecentArticles] = useState(false)

    return (
        <div className="Card">
                <h1> Recently viewed articles </h1>
                {!recentArticles && <p>Your recent viewed articles will appear here.</p>}
                <a href="/Library">Go to library</a>
                
        </div>
    )
}

export default Article
