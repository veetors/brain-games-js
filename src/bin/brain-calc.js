#!/usr/bin/env node

import make from '../games/brain-calc';
import { run } from '..';

const game = make();

run(game);
