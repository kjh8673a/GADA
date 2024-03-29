package com.dnf.dnfservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "auction_item_history")
public class AuctionItemHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "item_id", columnDefinition = "VARCHAR(200)")
	private String itemId;

	@Column(name = "average_price")
	private Long averagePrice;

	@Column(name = "registered_number")
	private Long registeredNumber;

	@Column(name = "total_item_count")
	private Long totalItemCount;

	@Column
	private String datetime;
}
