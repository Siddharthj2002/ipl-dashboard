package io.project_1.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.project_1.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    Team findByTeamName(String teamName);
}
