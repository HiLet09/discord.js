const Util = require('./util/Util');

module.exports = {
  // "Root" classes (starting points)
  BaseClient: require('./client/BaseClient'),
  Client: require('./client/Client'),
  Shard: require('./sharding/Shard'),
  ShardClientUtil: require('./sharding/ShardClientUtil'),
  ShardingManager: require('./sharding/ShardingManager'),
  WebhookClient: require('./client/WebhookClient'),

  // Utilities
  Collection: require('./util/Collection'),
  Constants: require('./util/Constants'),
  DataResolver: require('./util/DataResolver'),
  DataStore: require('./stores/DataStore'),
  DiscordAPIError: require('./rest/DiscordAPIError'),
  Permissions: require('./util/Permissions'),
  Snowflake: require('./util/Snowflake'),
  SnowflakeUtil: require('./util/Snowflake'),
  Structures: require('./util/Structures'),
  Util: Util,
  util: Util,
  version: require('../package.json').version,

  // Stores
  ChannelStore: require('./stores/ChannelStore'),
  ClientPresenceStore: require('./stores/ClientPresenceStore'),
  EmojiStore: require('./stores/EmojiStore'),
  GuildChannelStore: require('./stores/GuildChannelStore'),
  GuildMemberStore: require('./stores/GuildMemberStore'),
  GuildStore: require('./stores/GuildStore'),
  ReactionUserStore: require('./stores/ReactionUserStore'),
  MessageStore: require('./stores/MessageStore'),
  PresenceStore: require('./stores/PresenceStore'),
  RoleStore: require('./stores/RoleStore'),
  UserStore: require('./stores/UserStore'),

  // Shortcuts to Util methods
  escapeMarkdown: Util.escapeMarkdown,
  fetchRecommendedShards: Util.fetchRecommendedShards,
  splitMessage: Util.splitMessage,

  // Structures
  Base: require('./structures/Base'),
  Activity: require('./structures/Presence').Activity,
  CategoryChannel: require('./structures/CategoryChannel'),
  Channel: require('./structures/Channel'),
  ClientApplication: require('./structures/ClientApplication'),
  get ClientUser() {
    // This is a getter so that it properly extends any custom User class
    return require('./structures/ClientUser');
  },
  ClientUserChannelOverride: require('./structures/ClientUserChannelOverride'),
  ClientUserGuildSettings: require('./structures/ClientUserGuildSettings'),
  ClientUserSettings: require('./structures/ClientUserSettings'),
  Collector: require('./structures/interfaces/Collector'),
  DMChannel: require('./structures/DMChannel'),
  Emoji: require('./structures/Emoji'),
  GroupDMChannel: require('./structures/GroupDMChannel'),
  Guild: require('./structures/Guild'),
  GuildAuditLogs: require('./structures/GuildAuditLogs'),
  GuildChannel: require('./structures/GuildChannel'),
  GuildMember: require('./structures/GuildMember'),
  Invite: require('./structures/Invite'),
  Message: require('./structures/Message'),
  MessageAttachment: require('./structures/MessageAttachment'),
  MessageCollector: require('./structures/MessageCollector'),
  MessageEmbed: require('./structures/MessageEmbed'),
  MessageMentions: require('./structures/MessageMentions'),
  MessageReaction: require('./structures/MessageReaction'),
  PermissionOverwrites: require('./structures/PermissionOverwrites'),
  Presence: require('./structures/Presence').Presence,
  ReactionCollector: require('./structures/ReactionCollector'),
  ReactionEmoji: require('./structures/ReactionEmoji'),
  RichPresenceAssets: require('./structures/Presence').RichPresenceAssets,
  Role: require('./structures/Role'),
  TextChannel: require('./structures/TextChannel'),
  User: require('./structures/User'),
  UserConnection: require('./structures/UserConnection'),
  VoiceChannel: require('./structures/VoiceChannel'),
  VoiceRegion: require('./structures/VoiceRegion'),
  Webhook: require('./structures/Webhook'),

  WebSocket: require('./WebSocket'),
};
