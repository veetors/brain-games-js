#!/usr/bin/env node

import make from '../games/brain-even';
import { run } from '..';

const game = make();

run(game);
