import { Component } from "../ecs";
import Vector2 from "../types/Vector2";

export default class Transform extends Component {

    public position: Vector2 = Vector2.zero;
    public forward: Vector2 = Vector2.up;

    public constructor(position: Vector2 = Vector2.zero) {
        super();

        this.position = position;
    }
}
