package com.maple.mapleservice.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCharacter is a Querydsl query type for Character
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCharacter extends EntityPathBase<Character> {

    private static final long serialVersionUID = 26354534L;

    public static final QCharacter character = new QCharacter("character");

    public final StringPath character_class = createString("character_class");

    public final StringPath character_class_level = createString("character_class_level");

    public final StringPath character_image = createString("character_image");

    public final NumberPath<Long> character_level = createNumber("character_level", Long.class);

    public final StringPath character_name = createString("character_name");

    public final NumberPath<Long> combat_power = createNumber("combat_power", Long.class);

    public final StringPath date = createString("date");

    public final StringPath guild_name = createString("guild_name");

    public final StringPath ocid = createString("ocid");

    public final StringPath oguild_id = createString("oguild_id");

    public final StringPath parent_ocid = createString("parent_ocid");

    public final StringPath prev_name = createString("prev_name");

    public final StringPath world_name = createString("world_name");

    public QCharacter(String variable) {
        super(Character.class, forVariable(variable));
    }

    public QCharacter(Path<? extends Character> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCharacter(PathMetadata metadata) {
        super(Character.class, metadata);
    }

}

