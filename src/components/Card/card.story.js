import { h, Component } from 'preact';
import React from 'react'
import { storiesOf } from "@storybook/react";

import {suits, ranks} from '../util'

import Card from './';

storiesOf('Card', module)
.add('blank', () => (
    <div>
    {
        ranks.map(rank => {
            return suits.map(suit => {
                rank = typeof rank  === 'string' ? rank.toLowerCase() : rank
                suit = suit.toLowerCase().slice(0, -1)
                if (rank == "ace") rank = 1
                return <Card rank={rank} suit={suit} fillColor="red" key={`${rank}_${suit}`} />

            })
        })
    }
    </div>
))