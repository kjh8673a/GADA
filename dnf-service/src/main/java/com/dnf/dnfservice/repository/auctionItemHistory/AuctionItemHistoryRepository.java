package com.dnf.dnfservice.repository.auctionItemHistory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dnf.dnfservice.entity.AuctionItemHistory;

public interface AuctionItemHistoryRepository extends JpaRepository<AuctionItemHistory, Long> {

	@Query(value = "select a from AuctionItemHistory a where a.itemId = :itemId order by a.datetime desc limit 168")
	List<AuctionItemHistory> getAuctionItemHistory(String itemId);
}
