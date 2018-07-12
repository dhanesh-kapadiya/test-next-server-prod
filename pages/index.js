import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      status: 'Click me!'
    }
  }

  makeCall = () => {
    fetch('/check')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ status: 'Got it ! Check console.' })
      })
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          <li><Link href='/b' as='/a'><a>aa</a></Link></li>
          <li><Link href='/a' as='/b'><a>bb</a></Link></li>
          <li>
            <Link
              href={{pathname: '/posts', query: { id: '2' }}}
              as='/posts/2'
            >
              <a>post #2</a>
            </Link>
          </li>
        </ul>
        <div onClick={ this.makeCall }>{ this.state.status }</div>
      </React.Fragment>
    )
  }
}
