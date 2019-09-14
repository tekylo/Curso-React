import React from 'react';

export default props => <a href = { props.to } target = { props.openInNewTab ? '_blank' : '' }> { props.children } </a>