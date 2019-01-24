import React, {Component} from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css"
import searchIcon from "static/search.png"
import cn from "classnames";
import {Helmet} from "react-helmet";

class TeamList extends Component {
  
  state = {
    search: "",
    bShowSearch: false
  };


  showSearch = () => {
    this.setState({ bShowSearch: !this.state.bShowSearch });
  };

  render() {
    const status = this.state.bShowSearch ? "open" : "closed";

    var { teams } = this.props;
    const { search } = this.state;
    
    teams = teams.map(team => {
      return team.node.frontmatter;
    })

    const teamList = teams.filter(team => {
      return team.name.toUpperCase().includes(search.toUpperCase()) || team.league.toUpperCase().includes(search.toUpperCase());
    }).map(team => {
      const { name, slug, team_logo, league_logo } = team;
      return (
        <div key={slug} className={styles.listElement}>
          <Link 
            className={styles.teamLink}
            to={`teams/${slug}`}
          >
            <img className={styles.teamImg} src={team_logo.publicURL} alt="team"/>
            <div className={styles.teamName}> {name}</div>
            <img className={styles.leagueImg}src={league_logo.publicURL} alt="league"/>
          </Link>
        </div>
      )
    });
  
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Worlds - Teams</title>
        </Helmet>
        <div className={styles.topDiv}>
            <div className={cn(styles[status], styles.title)}>
                <span className={styles.left}>Team Logo</span>
                <span className={styles.titleName}>Team Name</span>
                <span className={styles.right}>League Logo</span>          
            </div>
            <div className={cn(styles[status], styles.searchDiv)}>
                <div className={cn(styles[status], styles.buffer)} ></div>
                <input
                  className={cn(styles[status], styles.search) }
                  type="search"
                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                  placeholder="Search teams or leagues"
                />
                <div className={cn(styles[status], styles.buffer)} ></div>
                <img src={searchIcon} className={ styles.searchIcon } alt="search"  onClick={this.showSearch}/>
            </div>
        </div>
        <div className={styles.teamList}>{teamList}</div>
      </>
    );
  }
};

export default TeamList;