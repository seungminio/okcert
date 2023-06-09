import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { TemporalField as java_time_temporal_TemporalField } from "./TemporalField";
import { TemporalQuery as java_time_temporal_TemporalQuery } from "./TemporalQuery";
import { ValueRange as java_time_temporal_ValueRange } from "./ValueRange";

/**
 * This class just defines types, you should import TemporalAccessor instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalAccessorClass extends JavaClass {
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
    // ================== Method isSupported ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    public isSupported(var0: java_time_temporal_TemporalField | null): Promise<boolean>;
    // ================== Method isSupported ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    public isSupportedSync(var0: java_time_temporal_TemporalField | null): boolean;
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
 * Class java.time.temporal.TemporalAccessor.
 *
 * This actually imports the java class for further use.
 * The class TemporalAccessorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class TemporalAccessor extends importClass<typeof TemporalAccessorClass>("java.time.temporal.TemporalAccessor") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default TemporalAccessor;