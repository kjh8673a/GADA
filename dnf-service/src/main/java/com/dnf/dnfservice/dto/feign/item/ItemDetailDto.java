package com.dnf.dnfservice.dto.feign.item;

import java.util.List;

import com.dnf.dnfservice.dto.model.item.ItemBuff;
import com.dnf.dnfservice.dto.model.item.ItemFixedOption;
import com.dnf.dnfservice.dto.model.item.ItemMythology;
import com.dnf.dnfservice.dto.model.item.ItemObtainInfo;
import com.dnf.dnfservice.dto.model.item.ItemStatus;

import lombok.Getter;

@Getter
public class ItemDetailDto {
	String itemId;
	String itemName;
	String itemRarity;
	String itemTypeId;
	String itemType;
	String itemTypeDetailId;
	String itemTypeDetail;
	Integer itemAvailableLevel;
	String itemExplain;
	String itemExplainDetail;
	String itemFlavorText;
	ItemObtainInfo obtainInfo;
	String setItemId;
	String setItemName;
	List<ItemStatus> itemStatus;
	ItemFixedOption fixedOption;
	ItemMythology mythologyInfo;
	ItemBuff itemBuff;
	List<String> hashtag;
}
