import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  const users  = [
     {img: 'https://i.pinimg.com/736x/17/f3/0e/17f30e744754786cc80b4762fe7edb80.jpg',
    intro: 'When a problem must be solved without witnesses, reports, or apologies, Invisible makes it disappear.',
    tag: 'Satisfactory'
    },
     {img: 'https://i.pinimg.com/1200x/b4/23/b7/b423b71225469ff69c6661caa448473a.jpg',
    intro: 'High heat, higher confidence. When a situation needs force, flair, and zero hesitation, Flambae burns through the problem before it spreads.',
    tag: 'Minimal'
    },
     {img: 'https://i.pinimg.com/1200x/13/93/50/139350966b52af5fdaec22d5ef478095.jpg',
    intro: 'Prism manipulates light for offense, defense, and misdirection. Crowd control, visual disruption, and flexible tactics make Prism invaluable when situations evolve faster than plans.',
    tag: 'Balanced'
    },
     {img: 'https://i.pinimg.com/1200x/14/9c/26/149c262302bbde5e0b462c8f148765fd.jpg',
    intro: 'Sharp mind, sharper aim. Blonde Blazer turns chaos into control with precision, confidence, and decisions that don’t need second chances.',
    tag: 'Excellent'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
            <Analytics />

    </div>
  )
}

export default App
