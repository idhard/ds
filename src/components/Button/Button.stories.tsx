import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import theme from '../../themes';
storiesOf('Button', module)
    .add(
        'simple button',
        () => (
            <Button theme={theme} onClick={action('button clicked')}>
                OK
            </Button>
        ),
        {
            info: { inline: true },
        },
    )
    .add('primary button', () => (
        <Button theme={theme} primary={true}>
            OK
        </Button>
    ));
