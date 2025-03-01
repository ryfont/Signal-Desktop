// Copyright 2019 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';
import classnames from 'classnames';

import * as styles from './ProgressBar.scss';

export type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & {
  readonly count: number;
  readonly total: number;
};

export const ProgressBar = React.memo(function ProgressBarInner({
  className,
  count,
  total,
}: Props) {
  return (
    <div className={classnames(styles.base, className)}>
      <div
        className={styles.bar}
        style={{ width: `${Math.floor((count / total) * 100)}%` }}
      />
    </div>
  );
});
