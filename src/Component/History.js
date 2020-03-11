import React, { PureComponent } from 'react'
import './History.css';
export default class History extends PureComponent {
    render() {
        return (
            <div className='guttered historyContent'>
                <div className='section red history'>
                    <h2>And now...a little history</h2>
                    <img alt="Drummer's Best Friend!" src="/img/32a971_ef44c27c54b24e82af281ae2fd8f0e70_mv2.webp" />
                    <p>
                        The late 60's and 70's were the "Chicago years" -  where Steve's humble beginnings started, jamming in the basement with his friends and playing along to records in his pajamas at his older brothers' parties while their musician friends from The Buckingham's, and Chicago Transit Authority, later known as Chicago, nodded in approval.
                ​</p><p>
                        Steve spent the 80's and early 90's moving around the country, playing in different bands and living the rock and roll dream of seeing the world from a van! Steve always says that those days were filled with great memories of great bands and the feeling that at any moment they would become rich and famous. Bands like Stinger, Busted, Lezlie Thriller, Battalion, Blatant Risk, Near 90, Whistle Gear, Red Light Fright, Predator, Interface, and The Cheeters.
                ​</p><p>
                        In 1993, Steve moved from Madison, Wisconsin, to Minnesota and became a member of Austin Healy.
                ​</p><p>
                        Steve's main gig since 1994 has been CBO/Casablanca Orchestra. Playing (and singing!) for President Bush in 2005, opening for Pat Benatar and Quiet Riot, and rocking a packed House of Blues in his hometown Chicago, are just a few of the great adventures this drummer has had while performing with this highly energetic show band.
                ​</p><p>
                        Now a very familiar face on the Twin Cities music scene, Steve has spent the last 25 years playing in and around the "State of Hockey" with a variety of musical acts from Funk to Rock to R&B to Swing to Jazz to Blues to Country to Pop to... well, you get the idea. When the phone rings, Steve and his drums answer!
                ​</p><p>
                        Over the last two years, Steve has stayed busy by expanding his list of side projects to include collaborations with Ragtown, Martin Anderson & The Goods, Sister, Alisa Leonard, Peter Diggins, Mark Allen, Whistle Gear and Brother Jon Band.
                ​</p><p>
                        If that's not enough, Steve has also reopened his drum studio in the woods and recently began taking students, young or old, who have always wanted to play the drums. "Have Fun, Play Drums" is a uniquely creative method to teach anyone how to play in days versus weeks, or months.
                </p>
                </div>

                <div className='section red topAlbums' >
                    <h3>Steve's Top 7 Favorite Albums</h3>
                    <ol>
                        <li>Toto IV-Toto.</li>
                        <li>The Seventh One-Toto.</li>
                        <li>Duke-Genesis.</li>
                        <li>Drama-Yes.</li>
                        <li>Moving Pictures-Rush.</li>
                        <li>Silk Degrees-Boz Scaggs.</li>
                        <li>The Nightfly-Donald Fagen.</li>
                    </ol>
                </div>

                <div className='section red topRecordings'>
                    <h3>
                        Steve's Top 5 Favorite Recordings on for which he has played.
                    </h3>
                    <ol>
                        <li>Covered-CBO.</li>
                        <li>13-Rich Farris.</li>
                        <li>The Rhythm Room Project-Paoli, Farris, Liska, and Vosberg.</li>
                        <li>Feels so right-Chris Clements.</li>
                        <li>Awakenings-AdrianFarris.</li>
                    </ol>
                </div>
            </div>

        )
    }
}
