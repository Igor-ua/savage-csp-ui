import React, {useEffect, useState} from 'react'
import {Button, Grid, Header, Icon, Label, Segment} from "semantic-ui-react";

import {getLiveServersInfo} from "../requests";
import {LiveServerInfo, LiveProps} from "../types";

import './scss/styles-live-panel.scss';
import {Link} from "react-router-dom";

export const LivePanel = ({background, serverProp}: LiveProps) => {
    const [liveServersInfo, setLiveServersInfo] = useState<Array<LiveServerInfo>>();
    const [isLoading, setIsLoading] = useState(false);
    const [intervalId, setIntervalId] = useState<any>()
    const refreshDisabledTimeout = 1000;
    const generalRefreshInterval = 60000;

    useEffect(() => {
        getLiveServersInfo().then(res => {
            setLiveServersInfo(res.data);
        })
    }, []);

    useEffect(() => {
        clearInterval(intervalId)
        if (liveServersInfo) {
            setIntervalId(setInterval(() => {
                disableWithTimeout();
                getLiveServersInfo().then(res => {
                    setLiveServersInfo(res.data);
                })
            }, generalRefreshInterval))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [liveServersInfo]);

    const disableWithTimeout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, refreshDisabledTimeout);
    }

    return <div className={'csp-online-wrapper'}>
        <Segment.Group className={'online-widget'}>

            <Segment inverted className={'online-segment-top'}>
                <Header as='h4'>
                    <Icon name='server'/>
                    <Header.Content>
                        {"Server List"}
                        <Label className={'csp-label'} size={"small"} attached={"top right"}>
                            online
                            <Label.Detail>
                                {liveServersInfo?.reduce((total: number, b: LiveServerInfo) => total + Number(b.data.cnum), 0)}
                            </Label.Detail>
                        </Label>
                    </Header.Content>
                </Header>
            </Segment>

            <Segment className={'segment-servers'} style={{backgroundImage: `url(${background})`}}>
                {liveServersInfo?.map((server, i) => (
                    <Grid key={'grid' + i} className={server?.data?.ip === serverProp ? "selected-server" : ""}>
                        <Grid.Column key={'label' + i} width={"12"} textAlign={"left"} verticalAlign={"middle"}>
                            <Label as={Link} to={'/servers/' + server?.data?.ip} image className={'server-label'}>
                                <Icon name='game' color={"yellow"} className={'server-icon'}/> {server?.data?.name}
                            </Label>
                        </Grid.Column>
                        <Grid.Column key={'online'+ i} width={"4"} textAlign={"right"} verticalAlign={"middle"}
                                     className={'online-column'}>
                            <Label color={"grey"} className={'online-label'}>
                                <span className={'online-label-span-live'}>{server?.data?.cnum}</span>
                                <span className={'online-label-span-max'}>/{server?.data?.cmax}</span>
                            </Label>
                        </Grid.Column>
                    </Grid>
                ))}
            </Segment>

            <Segment textAlign='center' className={'segment-live-bottom'}>
                <Button icon
                        primary
                        fluid
                        size={"small"}
                        onClick={() => {
                            disableWithTimeout();
                            getLiveServersInfo().then(res => {
                                setLiveServersInfo(res.data);
                            })
                        }}
                        disabled={isLoading}
                        compact>
                    <Icon name='refresh' loading={isLoading} className={isLoading ? "icon-loading" : ""}/> Refresh
                </Button>
            </Segment>
        </Segment.Group>
    </div>
}