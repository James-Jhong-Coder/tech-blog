export const getReadingTime = (text, charsPerMinute = 300) => {
    const count = text.replace(/\s+/g, "").length;
    const minutes = Math.max(1, Math.ceil(count / charsPerMinute));
    return `${minutes} 分鐘閱讀`;
};

export default {
    getReadingTime
};