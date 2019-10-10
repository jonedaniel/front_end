import React from "react";

function getAjax(url) {
    return new Promise((resolved, rejected) => {
        //创建ajax对象
        let ajax = new XMLHttpRequest();
        //配置参数
        ajax.open('get', url, true);
        //发送请求
        ajax.send();

        ajax.responseType = 'json';
        //请求成功之后
        ajax.onload = function () {
            if (this.status === 200) {
                resolved(ajax.response);
            } else {
                rejected();
            }

        }
    })
}

export default class Ss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbolArr: ['SH000001', 'SZ002124'],
            interval: 20000,
            datums: [],
            tableLength: 50,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            getAjax("http://localhost:8888/quotec?symbols=" + this.state.symbolArr.toString()).then(resp => {
                if (resp.data.length > 0) {
                    let datums = this.state.datums;
                    resp.date = new Date().toLocaleString();
                    datums.push(resp);
                    if (datums.length > this.state.tableLength) {
                        datums = datums.slice(1, 51);
                    }
                    this.setState({
                        datums: datums,
                    });
                }
            });
        }, this.state.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        let i = 0;
        return (
            <div>
                {
                    this.state.datums.map((datum) =>
                        <div>
                            <span>{i = i + 1}&nbsp;&nbsp;&nbsp;</span>
                            <span>{datum.date} =》&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            {
                                datum.data.map((quotec) =>
                                    <span key={quotec.symbol}>{quotec.current}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}