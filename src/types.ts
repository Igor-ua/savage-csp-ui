export interface DiscordInfo {
    channels: Array<any>;
    id: string;
    instant_invite: string;
    members: Array<any>;
    name: string;
    presence_count: number;
}

export interface LiveServerInfo {
    data: ServerInfo;
    teams: {
        0?: Team;
        1?: Team;
        2?: Team;
        3?: Team;
        4?: Team;
    };
}

export interface Team {
    name: string;
    players: Array<RawPlayer>;
}

export interface RawPlayer {
    0: Array<string>;
    1: string;
    2: string;
}

export interface Player {
    clanIcon: string;
    name: string;
}

export interface ServerInfo {
    name: string;
    world: string;
    cnum: number;
    vnum: number;
    cmax: number;
    time: number;
    drx: number;
    ver: string;
    gametype: string;
    needcmdr: number;
    pass: number;
    race1: string;
    race2: string;
    race3?: string;
    race4?: string;
    demo: number;
    pure: number;
    bal: number;
    timelimit: number;
    notes: string;
}

export interface LiveProps {
    server: string;
    name: string;
    background: string;
}

export interface WeeklyChartInfo {
    server: string;
}

export interface DailyChartInfo {
    server: string;
}

export interface WeeklySnapshot {
    timestamp: number;
    online: number;
}

export interface DailySnapshot {
    game_state: number;
    game_time: number;
    map_name: string;
    online: number;
    server_name: string;
    teams: {
        0: DSTeam;
        1: DSTeam;
        2: DSTeam;
        3?: DSTeam;
        4?: DSTeam;
    },
    timestamp: number;
}

export interface DSPlayer {
    clan_id: number;
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    name: string;
    on_team_time: number;
    uid: number;
}

export interface DSPlayer extends DPlayer {
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    on_team_time: number;
}

export interface DPlayer {
    name: string;
    uid: number;
    clan_id: number;
}

export interface DSTeam {
    players: Array<DSPlayer>;
    race: string;
    team_id: number;
    team_name: string;
}

export interface ExtendedGameResult extends GameResult {
    players: Array<EGRPlayer>;
    p_accuracies: Array<ACRPlayer>;
}

export interface ACRPlayer {
    name: string;
    clan_id: number;
    accuracies: Array<AAccuracy>;
    generalDamage: number;
}

export interface AAccuracy {
    name: string;
    value: EGRAccuracy;
}

export interface EGRPlayer {
    accuracy: Array<EGRAccuracy>;
    clan_id: number;
    clan_tag_name: string;
    info: EGRInfo;
    name: string;
    uid: number;
}

export interface EGRAccuracy {
    damage: number;
    deaths: number;
    hits: number;
    kills: number;
    name: string;
    shots: number;
}

export interface EGRInfo {
    auto_buff: number;
    blocks: number;
    build: number;
    build_damage: number;
    build_kill: number;
    carn_hp: number;
    client_damage: number;
    deaths: number;
    experience: number;
    flag_capture: number;
    heal: number;
    jumps: number;
    kill_streak: number;
    kills: number;
    melee_kill: number;
    mine: number;
    money_gained: number;
    money_spent: number;
    npc_damage: number;
    npc_kill: number;
    on_team_time: number;
    order_give: number;
    order_obeyed: number;
    outpost_damage: number;
    peon_damage: number;
    peon_kill: number;
    ranged_kill: number;
    sacrifice: number;
    siege_kill: number;
}

export interface GameResult {
    game: GRGame;
    server_name: string;
    timestamp: number;
    winner: number;
}

export interface GRGame {
    game_state: number;
    game_time: number;
    map_name: string;
    online: number;
    teams: {
        0: GRTeam;
        1: GRTeam;
        2: GRTeam;
        3?: GRTeam;
        4?: GRTeam;
    }
    timestamp: number;
}

export interface GRTeam {
    players: Array<GRPlayer>;
    race: string;
    team_id: number;
    team_name: string;
    commander_name: string;
    commander_clan_id: number;
}

export interface GRPlayer {
    clan_id: number;
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    name: string;
    on_team_time: number;
    uid: number;
    p: EGRPlayer;
}

export interface WSProps {
    players: Array<ACRPlayer>;
}

export interface LadderProps {
    body: any;
    week_name: string;
}

// ===============================================================================================
// Weekly Ladder  ================================================================================
// ===============================================================================================

export interface WeeklyLadder {
    week_name: string
    status: string
    players: {
        [key: number]: WPlayer
    }
    ladder: WLadder
}

export interface WPlayer {
    acc_damage: number
    accuracy: {
        'Hatchet': WPlayerAccuracy
        'Saber': WPlayerAccuracy
        'Battle axe': WPlayerAccuracy
        'Hunting Bow': WPlayerAccuracy
        'Marksman\'s Bow': WPlayerAccuracy
        'Crossbow': WPlayerAccuracy
        'Scattergun': WPlayerAccuracy
        'Repeater': WPlayerAccuracy
        'Coil Rifle': WPlayerAccuracy
        'Discharger': WPlayerAccuracy
        'Flux Gun': WPlayerAccuracy
        'Pulse Cannon': WPlayerAccuracy
        'Incinerator': WPlayerAccuracy
        'Mortar': WPlayerAccuracy
        'Launcher': WPlayerAccuracy
        'Ballista Weapon': WPlayerAccuracy
        'Catapult Weapon': WPlayerAccuracy
        'Bone sword': WPlayerAccuracy
        'Stalker claws': WPlayerAccuracy
        'Predator claws': WPlayerAccuracy
        'Venomous': WPlayerAccuracy
        'Rabid': WPlayerAccuracy
        'Carnivorous': WPlayerAccuracy
        'Ember': WPlayerAccuracy
        'Blaze': WPlayerAccuracy
        'Fireball': WPlayerAccuracy
        'Frost Bolts': WPlayerAccuracy
        'Tempest': WPlayerAccuracy
        'Lightning': WPlayerAccuracy
        'Chaos Bolt': WPlayerAccuracy
        'Surge': WPlayerAccuracy
        'Rupture': WPlayerAccuracy
        'Summoner strike': WPlayerAccuracy
        'Uprooted Tree': WPlayerAccuracy
    }
    clan_id: number
    clan_tag_name: string
    comm_stats: {
        comm_draw: number
        comm_lose: number
        comm_points: number
        comm_wins: number
    }
    info: WLInfo
    name: string
    names: Array<WLNames>
    team_stats: {
        stats: {
            [key: number]: TeamStats
        }
    }
    uid: number
}

export interface TeamStats {
    games: number
    wins: number
    lose: number
    draw: number
}

export interface WLNames {
    usages: number
    name: string
}

export interface WLInfo extends EGRInfo {

}

export interface WPlayerAccuracy {
    damage: number
    deaths: number
    hits: number
    kills: number
    shots: number
}

export interface WLadder {
    damage: {
        acc_damage: any
        [key: string]: {
            [key: number]: LDamage
        }
    }
    info: {
        auto_buff: LInfo
        blocks: LInfo
        build: LInfo
        build_damage: LInfo
        build_kill: LInfo
        carn_hp: LInfo
        client_damage: LInfo
        deaths: LInfo
        experience: LInfo
        flag_capture: LInfo
        heal: LInfo
        jumps: LInfo
        kill_streak: LInfo
        kills: LInfo
        melee_kill: LInfo
        mine: LInfo
        money_gained: LInfo
        money_spent: LInfo
        npc_damage: LInfo
        npc_kill: LInfo
        on_team_time: LInfo
        order_give: LInfo
        order_obeyed: LInfo
        outpost_damage: LInfo
        peon_damage: LInfo
        peon_kill: LInfo
        ranged_kill: LInfo
        sacrifice: LInfo
        siege_kill: LInfo
        comm_wins: LInfo
        comm_lose: LInfo
        comm_draw: LInfo
        comm_points: LInfo
    }
}

export interface LInfo {
    [key: number]: {
        clan_id: number
        item_value: number
        name: string
        uid: number
    }
}

export interface LDamage {
    a_item_damage: number
    a_item_hits: number
    a_item_shots: number
    clan_id: number
    name: string
    uid: number
}