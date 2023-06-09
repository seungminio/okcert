import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { TemporalAdjuster as java_time_temporal_TemporalAdjuster } from "./TemporalAdjuster";
import { TemporalField as java_time_temporal_TemporalField } from "./TemporalField";
import { Long as java_lang_Long } from "./../../lang/Long";
import { TemporalAmount as java_time_temporal_TemporalAmount } from "./TemporalAmount";
import { TemporalUnit as java_time_temporal_TemporalUnit } from "./TemporalUnit";
import { TemporalQuery as java_time_temporal_TemporalQuery } from "./TemporalQuery";
import { ValueRange as java_time_temporal_ValueRange } from "./ValueRange";

/**
 * This class just defines types, you should import Temporal instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalClass extends JavaClass {
    // ================== Method with ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public with(var0: java_time_temporal_TemporalAdjuster | null): Promise<Temporal | null>;
    // ================== Method with ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAdjuster'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public withSync(var0: java_time_temporal_TemporalAdjuster | null): Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public with(var0: java_time_temporal_TemporalField | null, var1: java_lang_Long | bigint | number): Promise<Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @param var1 original type: 'long'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public withSync(var0: java_time_temporal_TemporalField | null, var1: java_lang_Long | bigint | number): Temporal | null;
    // ================== Method plus ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public plus(var0: java_time_temporal_TemporalAmount | null): Promise<Temporal | null>;
    // ================== Method plus ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public plusSync(var0: java_time_temporal_TemporalAmount | null): Temporal | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public plus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | null): Promise<Temporal | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public plusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | null): Temporal | null;
    // ================== Method minus ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public minus(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | null): Promise<Temporal | null>;
    // ================== Method minus ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public minusSync(var0: java_lang_Long | bigint | number, var1: java_time_temporal_TemporalUnit | null): Temporal | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public minus(var0: java_time_temporal_TemporalAmount | null): Promise<Temporal | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAmount'
     * @return original return type: 'java.time.temporal.Temporal'
     */
    public minusSync(var0: java_time_temporal_TemporalAmount | null): Temporal | null;
    // ================== Method until ==================
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    public until(var0: TemporalClass | null, var1: java_time_temporal_TemporalUnit | null): Promise<number>;
    // ================== Method until ==================
    /**
     * @param var0 original type: 'java.time.temporal.Temporal'
     * @param var1 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'long'
     */
    public untilSync(var0: TemporalClass | null, var1: java_time_temporal_TemporalUnit | null): number;
    // ================== Method isSupported ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'boolean'
     */
    public isSupported(var0: java_time_temporal_TemporalUnit | null): Promise<boolean>;
    // ================== Method isSupported ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalUnit'
     * @return original return type: 'boolean'
     */
    public isSupportedSync(var0: java_time_temporal_TemporalUnit | null): boolean;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    public isSupported(var0: java_time_temporal_TemporalField | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    public isSupportedSync(var0: java_time_temporal_TemporalField | null): boolean;
    // ================== Method get ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    public get(var0: java_time_temporal_TemporalField | null): Promise<number>;
    // ================== Method get ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    public getSync(var0: java_time_temporal_TemporalField | null): number;
    // ================== Method getLong ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    public getLong(var0: java_time_temporal_TemporalField | null): Promise<number>;
    // ================== Method getLong ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    public getLongSync(var0: java_time_temporal_TemporalField | null): number;
    // ================== Method query ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    public query(var0: java_time_temporal_TemporalQuery | null): Promise<BasicOrJavaType | null>;
    // ================== Method query ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    public querySync(var0: java_time_temporal_TemporalQuery | null): BasicOrJavaType | null;
    // ================== Method range ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    public range(var0: java_time_temporal_TemporalField | null): Promise<java_time_temporal_ValueRange | null>;
    // ================== Method range ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    public rangeSync(var0: java_time_temporal_TemporalField | null): java_time_temporal_ValueRange | null;
}

/**
 * Class java.time.temporal.Temporal.
 *
 * This actually imports the java class for further use.
 * The class TemporalClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Temporal extends importClass<typeof TemporalClass>("java.time.temporal.Temporal") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default Temporal;